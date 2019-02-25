import React, { useState } from 'react'
import Modal from './modal'
import Button from '@material-ui/core/Button'
import styles from './alumni-details.scss'
import { DotsHorizontal as MoreIcon, WindowClose } from 'mdi-material-ui'

export default props => {
  const [open, setOpen] = useState(false)
  const { name, summary, skills, photo } = props.alumni

  return (
    <div>
      <style jsx>{styles}</style>
      <Button
        size='small'
        variant='contained'
        fullWidth
        onClick={() => setOpen(true)}
      >
        details <MoreIcon />
      </Button>
      <Modal show={open} onClose={() => setOpen(false)}>
        <div className='alumni-details'>
          <img
            className={`photo ${!photo && 'defaultAvatar'}`}
            src={
              photo ? `/static/alumni/photos/${photo}` : `/static/avatar.png`
            }
            alt={name}
          />
          <h3 className='hyf-title'>{name}</h3>
          <h3>Summary:</h3>
          <p>{summary}</p>
          <h3>Skills:</h3>
          <p> {skills.join(', ')}</p>
          <span className='close' onClick={() => setOpen(false)}>
            <WindowClose />
          </span>
        </div>
      </Modal>
    </div>
  )
}
