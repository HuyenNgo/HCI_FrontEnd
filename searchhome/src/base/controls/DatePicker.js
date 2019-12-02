import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import constants from './../config/constants'

export default class DateCustomPicker extends Component{
    render(){
        const{title, formatString,style,mode, min, onValueChanged,value}= this.props
        return(
            <DatePicker
            style={style}
            date={value?value:new Date()} //initial date from state
            mode={mode?mode:"date"} //The enum of date, datetime and time
            placeholder={title?title:''}
            format={formatString?formatString:constants.FORMAT_DATE_PICKER_STRING}
            minDate={min?min:constants.MIN_DATE_STRING}

            confirmBtnText={'OK'}
            cancelBtnText={'CANCEL'}
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
            }}
            onDateChange={onValueChanged}
        />)
    }
}