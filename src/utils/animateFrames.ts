export const animateFrames = (
	frame: string,
	index: number,
	startTime: number,
	framesArray: string[]
): void => {
	const [, , frameContent] = frame.split(/\d$/gm);
	const delay: number =
		(index + 1) * (1 / 30) * 1000 - (Date.now() - startTime);
	console.log(frameContent);
	setTimeout(() => {
		console.clear();
		if (framesArray.length > 0) {
			animateFrames(framesArray.shift()!, index + 1, startTime, framesArray);
		} else {
			console.log("Ended!");
		}
	}, delay);
};
