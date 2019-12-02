import React, { Component } from 'react'
import {Toast} from 'native-base'


class BaseComponent extends Component {

    constructor(props) {
        super(props)
    }

    isNull = (value) => {
        if (value == 0) {
            return false
        }
        return !value
    }

    toastSuccess = (message) => {
        Toast.show({
            text: message,
            buttonText: "Okay",
            duration: 3000,
            position: 'bottom',
            type: "success"
        })
    }

    toastError = (message) => {
        Toast.show({
            text: message,
            buttonText: "Okay",
            duration: 3000,
            position: 'bottom',
            type: "danger"
        })
    }
    canLoadMore = (pagingModel) => {
        if (this.isNull(pagingModel))
            return false
        if (pagingModel.currentPage < 0 || pagingModel.pageCount < 0 || pagingModel.items.length === 0)
            return false
        if (pagingModel.currentPage >= pagingModel.pageCount)
            return false
        return true
    }
}
export default BaseComponent