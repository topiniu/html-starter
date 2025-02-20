import json
from PIL import Image
import sys
import random

def process_image(image_filename):
    # Generate output JSON filename from input filename
    output_filename = f"pixel_data_{image_filename.rsplit('.', 1)[0]}.json"
    
    # Load the image
    image = Image.open(image_filename)
    pixels = image.load()

    # Get the image dimensions
    width, height = image.size

    # Prepare a list to hold the pixel data
    pixel_data = []

    # Extract pixel data
    for x in range(width):
        for y in range(height):
            r, g, b = pixels[x, y][:3]  # Get the RGB values
            # pixel_data.append({"x": x, "y": y, "color": f"rgb({r},{g},{b})"})
            # random two long int 
            random_long_int1 = random.randint(0, 1000000000000000000)
            random_long_int2 = random.randint(0, 1000000000000000000)
            # trans x.yto ascii
            x_ascii = chr(x)
            y_ascii = chr(y)
            # let {random_long_int1:x,random_long_int2:y}
            pixel_data.append({random_long_int1:x_ascii,random_long_int2:y_ascii, "rgb":f"rgb({r},{g},{b})"})

    # Save to a JSON file
    with open(output_filename, "w") as file:
        json.dump(pixel_data, file)

    print(f"Pixel data saved to {output_filename}!")

# Define the list of image files to process
image_files = [
    "1.png",
    "2.png",
    "3.png",
    "4.png"
    # Add more filenames as needed
]

# Process each image file in the list
for filename in image_files:
    try:
        process_image(filename)
    except Exception as e:
        print(f"Error processing {filename}: {str(e)}")