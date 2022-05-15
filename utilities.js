function animate(){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    handleEnemies();
    requestAnimationFrame(animate);
}

animate();