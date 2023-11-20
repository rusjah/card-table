import React from 'react'
import Nav from '../layout/Nav'
import Footer from '../layout/Footer'
import Card from '../layout/Card'
import songs from '../../data'

function Table() {
  return (
    <> 
    <div className='grow p-10 flex gap-4 flex-wrap justify-around  bg-gradient-to-r from-rose-100 to-blue-600'>
        <div className="overflow-x-auto w-full">
            <table className="table table-zebranpm">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Date of release</th>
                    <th>Duration</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                 {songs.map((el, ind) => 
                 <tr>
                    <th>{ind + 1}</th>
                    <td>{el.name}</td>
                    <td>{el.artist}</td>
                    <td> {el.day}.{el.month}.{el.year}</td>
                    <td>{el.duration}</td>
                </tr>)}
               
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Table

{/* <table>
        <thead>
          <tr>
            <td id='num'>№</td>
            <td>Song</td>
            <td>Artist</td>
            <td>Data of release</td>
            <td>Weeks at number 1</td>
            <td>Durcation</td>
          </tr>
        </thead>
        <tbody>
          {songs.map((el, ind) => 
            <tr>
              <td><span>#</span>{ind + 1}</td>
              <td>{el.name}</td>
              <td>{el.artist}</td>
              <td>{el.day}.{el.month}.{el.year}</td>
              <td>{el.weeksAtNumberOne}</td>
              <td>{el.duration}</td>
          </tr>
          )}
        </tbody>
      </table> */}