const bigNumsFormatter = (followers: number) => {
	let i = 0
	while (followers > 1000) {
		followers /= 1000
		i++
	}
	followers = Math.round(followers * 10) / 10
	switch (i) {
		case 0:
			return followers
		case 1:
			return followers + 'K'
		case 2:
			return followers + 'M'
		case 3:
			return followers + 'B'
	}
}

export default bigNumsFormatter
