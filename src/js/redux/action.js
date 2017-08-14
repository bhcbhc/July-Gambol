/**
 * Created by Ninghai on 2017/7/10.
 */
import fetch from 'isomorphic-fetch'


function requestPost() {
	return {
		type: 'requestPost'
	}
}

function receivePost(dispatch, data) {
	setTimeout(() => dispatch(fetchData), 10000)

	return {
		type: 'receivePost',
		data: data
	}
}

function errorPost(dispatch, error) {
	setTimeout(() => dispatch(fetchData), 20000)

	return {
		type: 'errorPost',
		data: error
	}
}

//action creator  function(dispatch,getState,extraArgument)
export default function fetchData(dispatch) {
	dispatch(requestPost())

	const request = new Request(
		'http://222.175.7.188:8060/Services/GambolLocalService.asmx/GetDashboardData',
		{
			credentials: 'include',
			mode: 'cors'
		}
	)

	return fetch(request)
		.then(response => response.text())
		.then(data => dispatch(receivePost(dispatch, eval('(' + data + ')'))))
		.catch(e => dispatch(errorPost(dispatch, e)))
}