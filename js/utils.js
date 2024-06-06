import { POSTS } from './constants.js';

export function renderListView () {
	return `
		<div class="list-view">
			${
				POSTS.map(({today, likes, comments, uploadedDate, date}, idx) => {
			return `
				<div class="card card_list">
					<img class="card__img card__img_list" src="img/posts/${idx}.jpeg" alt="Post photo">
					<div class="card__body">
						<div class="card__social">
							<span class="typography typography_subtitle">Today</span>
							<div class="flex flex__align_center flex__gap_xl">
								<div class="flex flex__align_center flex__gap_sm">
									<img src="img/socials/like.svg" alt="Likes">
										<span class="typography typography_semi-weight">${today.likes}</span>
								</div>
								<div class="flex flex__align_center flex__gap_sm">
									<img src="img/socials/comment.svg" alt="Comments">
										<span class="typography typography_semi-weight">${today.comments}</span>
								</div>
							</div>
						</div>
						<div class="card__social">
							<span class="typography typography_subtitle">${date}</span>
							<div class="flex flex__align_center flex__gap_xl">
								<div class="flex flex__align_center flex__gap_sm">
									<img src="img/socials/like.svg" alt="Likes">
										<span class="typography typography_semi-weight">${likes}</span></div>
								<div class="flex flex__align_center flex__gap_sm">
									<img src="img/socials/comment.svg" alt="Comments">
										<span class="typography typography_semi-weight">${comments}</span></div>
							</div>
						</div>
						<div class="card__social">
							<span class="typography typography_subtitle">Image upload</span>
							<p>${uploadedDate}</p>
						</div>
					</div>
				</div>
				`
				}).join('')
			}
		</div>
	`
}

export function renderCardView () {
	return `
		<div class="card-view">
		${
			POSTS.map(({today, likes, comments, uploadedDate, date}, idx) => {
				return `
					<div class="card card_rect flex flex__direction_column flex__gap_sm">
						<img class="card__img card__img_rect" src="img/posts/${idx}.jpeg" alt="Post photo">
						<div class="flex flex__direction_column padding padding__horizontal_md">
							<div class="flex flex_grow flex__justify_between">
								<div class="flex flex__direction_column flex__gap_sm">
									<span class="typography typography_subtitle">Today</span>
									<div class="flex flex__direction_column flex__gap_sm">
										<div class="flex flex__align_center flex__gap_sm">
											<img src="img/socials/like.svg" alt="Likes">
											<span class="typography typography_semi-weight">${today.likes}</span>
										</div>
										<div class="flex flex__align_center flex__gap_sm">
											<img src="img/socials/comment.svg" alt="Comments">
											<span class="typography typography_semi-weight">${today.comments}</span>
										</div>
									</div>
								</div>
								<div class="flex flex__direction_column flex__gap_sm">
									<span class="typography typography_subtitle">${date}</span>
									<div class="flex flex__direction_column flex__gap_sm">
										<div class="flex flex__align_center flex__gap_sm">
											<img src="img/socials/like.svg" alt="Likes">
											<span class="typography typography_semi-weight">${likes}</span></div>
										<div class="flex flex__align_center flex__gap_sm">
											<img src="img/socials/comment.svg" alt="Comments">
											<span class="typography typography_semi-weight">${comments}</span></div>
									</div>
								</div>
							</div>
							<div class="flex flex__justify_between padding__vertical_xl">
								<span class="typography typography_semi-weight">Image upload</span>
								${uploadedDate}
							</div>
						</div>
					</div>
				` 
		}).join('')
	}
	`
}


