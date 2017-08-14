/**
 * Created by Ninghai on 2017/7/10.
 */

const initState = {
	pageSelect: 'test',
	interval: -1,
	orderDetail: {
		soId: '',
		soType: '',
		salesOrg: '',
		soClient: '',
		shipClient: '',
		soStatus: '',
		updateDate: '',
		quotationDate: '',
		dueDate: '',
		updateUser: '',
		isInsert: false,
		isAlone: false,
		petName: '',
		breed: '',
		weight: '',
		src: '',
		birthday: '',
		soiList: []
	},
	orderList: {
		totalNum: 0,
		nNum: 0,
		sNum: 0,
		aNum: 0,
		fNum: 0,
		tNum: 0,
		orderData: []
	}
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'requestPost':
			return state
		case 'errorPost':
			console.info('requestError=>%s', action.data)
			return state
		case 'receivePost':
			return action.data
		default:
			return state
	}
}

export default reducer