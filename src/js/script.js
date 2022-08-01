// Scroll
let zSpacing = -1000,
	currentPos = zSpacing / 5,
	frames = document.getElementsByClassName('frame'),
	arrFrames = Array.from(frames),
	zValues = [];

window.onscroll = () => {

	const top = document.documentElement.scrollTop,
		delta = currentPos - top;

	currentPos = top;

	arrFrames.forEach((n, i) => {
		zValues.push((zSpacing * i) + zSpacing);
		zValues[i] += delta * (-5);

		const transform = `translateZ(${zValues[i]}px)`,
			opacity = zValues[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

		arrFrames[i].setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
	})

}

window.scrollTo(0, 1);

// Audio
const soundButton = document.querySelector('.sound-button'),
	audio = document.querySelector('.audio');

soundButton.addEventListener('click', () => {
	soundButton.classList.toggle('paused');
	soundButton.classList.contains('paused') ? audio.pause() : audio.play();
})

window.onfocus = () => {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play();
}

window.onblur = () => {
	audio.pause();
}