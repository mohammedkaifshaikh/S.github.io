snake.unshift(head);

if (ateFood) {
    score += 10;
    spawnFood();
} else {
    snake.pop();
}
