import React from 'react'
import sort from './../../icons/Sort.svg'
import sortUp from './../../icons/Sort-Up.svg'
import sortDown from './../../icons/Sort-Down.svg'
import s from './../../HW15.module.css'

// добавить в проект иконки и импортировать
const downIcon = sortDown
const upIcon = sortUp
const noneIcon = sort

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') return down
    else if (sort === '1tech' || sort === '1developer') return up
    else return ''
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img alt={'sort'} className={s.img}
                id={id + '-icon-' + sort}
                src={icon}
            />

        </span>
    )
}

export default SuperSort
