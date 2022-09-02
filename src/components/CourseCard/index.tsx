import React from 'react'
import Image from 'next/image'
import IconReact from '../../../public/favicon/react-icon.svg'
import IconNode from '../../../public/favicon/nodejs-icon.svg'
import IconType from '../../../public/favicon/typescript-icon.svg'

const CourseCard = () => {
  return (
    <div className="card">
      <Image className='card-logo' src={IconReact} alt='Icon React' width={100} height={100} />
          <h1 className='card-title'>REACT JS</h1>
          <button>ADICIONAR</button>
        </div>
  )
}

export default CourseCard