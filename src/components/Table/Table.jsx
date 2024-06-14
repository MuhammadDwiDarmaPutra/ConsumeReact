import React from 'react'
import axios from 'axios';

export default function Table() {
    const data = [
        {
          nama: 'babol',
          rombel: 'PPLG XI-5',
          rayon: 'Tajur 1'
        }
      ];

  return (
    <>
    <table border={1}>
        <thead>
            <tr>
                {
                    props.title.map((val, i) => (
                        <td>{val}</td>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {props.data}
        </tbody>
    </table>
    </>
  )
}