import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { getRepositories } from './personalHomepageAPI';
import { fetchRepositoriesSuccess, fetchRepositoriesError, fetchRepositories } from './personalHomepageSlice';

const loadingDelay = 500; 

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(loadingDelay); //just to demo the loading view
        const repositories = yield call(getRepositories, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }   
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}