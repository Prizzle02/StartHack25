from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
import base64
import os
import io

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "maps"
NDVI_FOLDER = "outputs"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(NDVI_FOLDER, exist_ok=True)

def estimate_ndvi_from_rgb(image_path):
    img = Image.open(image_path).convert('RGB')
    img_array = np.array(img).astype(np.float32)

    red = img_array[:, :, 0]
    green = img_array[:, :, 1]
    blue = img_array[:, :, 2]

    nir = 0.3 * red + 0.6 * green + 0.1 * blue
    ndvi = (nir - red) / (nir + red + 1e-6)

    return ndvi

def save_ndvi_plot(ndvi):
    fig, ax = plt.subplots(figsize=(8, 6))
    ax.imshow(ndvi, cmap='RdYlGn', alpha=0.7)  # Semi-transparent NDVI
    ax.axis('off')

    buffer = io.BytesIO()
    plt.savefig(buffer, format="png", bbox_inches="tight", pad_inches=0)
    plt.close()
    buffer.seek(0)

    return buffer

@app.route("/upload", methods=["POST"])
def upload_and_process():
    try:
        data = request.json.get("image")
        if not data:
            return jsonify({"error": "No image data received"}), 400

        image_data = base64.b64decode(data.split(",")[1])
        image_path = os.path.join(UPLOAD_FOLDER, "map_capture.png")

        with open(image_path, "wb") as f:
            f.write(image_data)

        ndvi = estimate_ndvi_from_rgb(image_path)
        ndvi_buffer = save_ndvi_plot(ndvi)

        ndvi_base64 = base64.b64encode(ndvi_buffer.getvalue()).decode("utf-8")
        return jsonify({"ndvi_image": f"data:image/png;base64,{ndvi_base64}"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
