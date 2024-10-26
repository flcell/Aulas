let imageCount = 0;
let videoCount = 0;

document.getElementById('generateImage').addEventListener('click', function() {
    const prompt = document.getElementById('prompt').value;
    if (imageCount < 5) {
        generateImage(prompt);
        imageCount++;
    } else {
        alert("Limite diário de 5 imagens atingido.");
    }
});

document.getElementById('generateVideo').addEventListener('click', function() {
    const prompt = document.getElementById('prompt').value;
    if (videoCount < 3) {
        generateVideo(prompt);
        videoCount++;
    } else {
        alert("Limite diário de 3 vídeos atingido.");
    }
});

function generateImage(prompt) {
    // Simulação de geração de imagem (substitua pela lógica real)
    const img = document.createElement('img');
    img.src = `https://via.placeholder.com/800x600.png?text=${encodeURIComponent(prompt)}`;
    img.alt = prompt;

    const watermark = document.createElement('div');
    watermark.innerText = "Plixell";
    watermark.style.position = 'absolute';
    watermark.style.bottom = '10px';
    watermark.style.right = '10px';
    watermark.style.color = 'rgba(255, 255, 255, 0.7)';
    watermark.style.fontSize = '20px';

    const container = document.createElement('div');
    container.style.position = 'relative';
    container.appendChild(img);
    container.appendChild(watermark);

    const downloadButton = document.createElement('a');
    downloadButton.href = img.src;
    downloadButton.download = "imagem.png";
    downloadButton.innerText = "Download";
    downloadButton.style.display = 'block';
    downloadButton.style.marginTop = '10px';
    downloadButton.style.color = '#61dafb';

    document.getElementById('imageContainer').appendChild(container);
    document.getElementById('imageContainer').appendChild(downloadButton);
}

function generateVideo(prompt) {
    // Simulação de geração de vídeo (substitua pela lógica real)
    const video = document.createElement('video');
    video.src = `https://www.w3schools.com/html/mov_bbb.mp4`; // URL de exemplo
    video.controls = true;

    const watermark = document.createElement('div');
    watermark.innerText = "Plixell";
    watermark.style.position = 'absolute';
    watermark.style.bottom = '10px';
    watermark.style.right = '10px';
    watermark.style.color = 'rgba(255, 255, 255, 0.7)';
    watermark.style.fontSize = '20px';

    const container = document.createElement('div');
    container.style.position = 'relative';
    container.appendChild(video);
    container.appendChild(watermark);

    const downloadButton = document.createElement('a');
    downloadButton.href = video.src;
    downloadButton.download = "video.mp4";
    downloadButton.innerText = "Download";
    downloadButton.style.display = 'block';
    downloadButton.style.marginTop = '10px';
    downloadButton.style.color = '#61dafb';

    document.getElementById('videoContainer').appendChild(container);
    document.getElementById('videoContainer').appendChild(downloadButton);
}
