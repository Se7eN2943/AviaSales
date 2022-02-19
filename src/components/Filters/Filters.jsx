import React from 'react';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const defaultCheckedList = ['Без пересадок'];

const Filters = () => {
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
        e.target.checked
            ? onChange(['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'])
            : onChange([])
    };

    return (
        <div className='filters block-shadow'>
            <span className='transplants'>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Все
            </Checkbox>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </div>
    );
};

export default Filters
