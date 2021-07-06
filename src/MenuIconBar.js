import React from 'react'
import './MenuIconBar.css'
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import TextFormatIcon from '@material-ui/icons/TextFormat';

function MenuIconBar() {
    return (
        <div className='menu__iconbar'>
            <LocalDiningIcon className='cut__icon menu-icon' />
            <FileCopyIcon className='copy__icon menu-icon' />
            <AssignmentReturnedIcon className='paste__icon menu-icon' />
            <select className='selector font__family__selector'>
                <option>Hello1</option>
                <option>Hello2</option>
            </select>
            <select className='selector font__size__selector'>
                <option value = '10'>10</option>
                <option value = '12'>12</option>
                <option value = '14'>14</option>
                <option value = '16'>16</option>
                <option value = '18'>18</option>
                <option value = '20'>20</option>
                <option value = '22'>22</option>
                <option value = '24'>24</option>
                <option value = '26'>26</option>
                <option value = '28'>28</option>
                <option value = '30'>30</option>
            </select>
            <FormatBoldIcon className='bold__icon menu-icon' />
            <FormatItalicIcon className='italic__icon menu-icon' />
            <FormatUnderlinedIcon className='underline__icon menu-icon' />
            <FormatAlignCenterIcon className='align__center menu-icon' />
            <FormatAlignRightIcon className='align__right menu-icon' />
            <FormatAlignLeftIcon className='align__left menu-icon' />
            <FormatColorFillIcon className='fill__icon menu-icon' />
            <TextFormatIcon className='text__icon menu-icon' />

        </div>
    )
}

export default MenuIconBar
