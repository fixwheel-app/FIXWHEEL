import rembg
from PIL import Image

input_path = 'frontend/public/premium-bike.png'
output_path = 'frontend/public/premium-bike-transparent.png'

print("Removing background...")
try:
    input_img = Image.open(input_path)
    output_img = rembg.remove(input_img)
    output_img.save(output_path)
    print("Successfully removed background!")
except Exception as e:
    print(f"Error: {e}")
