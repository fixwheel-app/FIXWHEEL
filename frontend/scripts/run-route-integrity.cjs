const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const frontendRoot = path.resolve(__dirname, "..");
const buildDirectoryName = `.next-route-test-${process.pid}`;
const buildDirectory = path.resolve(frontendRoot, buildDirectoryName);
const expectedPrefix = path.resolve(frontendRoot, ".next-route-test-");
const nextBin = path.join(frontendRoot, "node_modules", "next", "dist", "bin", "next");
const tsconfigPath = path.join(frontendRoot, "tsconfig.json");
const originalTsconfig = fs.readFileSync(tsconfigPath);
const testEnvironment = {
  ...process.env,
  NEXT_DIST_DIR: buildDirectoryName,
};

if (!buildDirectory.startsWith(expectedPrefix)) {
  throw new Error(`Refusing to use unexpected route-test directory: ${buildDirectory}`);
}

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: frontendRoot,
    env: testEnvironment,
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  return result.status ?? 1;
}

let exitCode = 1;

try {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    exitCode = run(process.execPath, [nextBin, "build"]);
    if (exitCode === 0) break;
    if (attempt < 3) {
      console.warn(`Route-integrity build attempt ${attempt} hit a filesystem error; retrying.`);
    }
  }
  if (exitCode === 0) {
    exitCode = run(process.execPath, [
      "--test",
      "--test-concurrency=1",
      "tests/route-sitemap.test.cjs",
    ]);
  }
} finally {
  fs.writeFileSync(tsconfigPath, originalTsconfig);
  fs.rmSync(buildDirectory, { force: true, recursive: true });
}

process.exit(exitCode);
