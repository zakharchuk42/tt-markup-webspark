import { renderListView, renderCardView } from './utils.js';

const getElement = id => document.getElementById(id);

const handleView = (viewMode) => {
	localStorage.setItem('viewMode', viewMode);
	updateView(viewMode);
};

const updateView = (viewMode) => {
	const rootElement = getElement('root');
	const listViewButton = getElement('handleListView');
	const rectViewButton = getElement('handleRectView');

	if (viewMode === 'listView') {
		listViewButton.querySelector('.icon').classList.add('icon_is-active');
		rectViewButton.querySelector('.icon').classList.remove('icon_is-active');
		rootElement.innerHTML = renderListView();
	} else {
		rectViewButton.querySelector('.icon').classList.add('icon_is-active');
		listViewButton.querySelector('.icon').classList.remove('icon_is-active');
		rootElement.innerHTML = renderCardView();
	}
};

export const initHandleView = () => {
	const viewMode = localStorage.getItem('viewMode') || 'listView';
	updateView(viewMode);

	getElement('handleListView').addEventListener('click', () => handleView('listView'));
	getElement('handleRectView').addEventListener('click', () => handleView('cardView'));
};