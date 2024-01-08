import { useState } from 'react';
import './App.css';
import profile from './assets/photo.png';
import project from './assets/project.png';
import {Grid, Button, FormControl, InputLabel, Select, MenuItem, Typography, TextField} from '@mui/material';



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='font-bold text-2xl'>Chris Portfolio</h1>
            </div>
            <div>
              <ul className='flex gap-5'>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>     
                </li>  
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>     
                </li>   
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>About me </a>     
                </li>           
              </ul>
            </div>
          </div>
        </div>

      </header>
      <main>
        {/* Intro Banner */}
        <section>
          <div className='container m-auto px-4 py-10 flex gap-20'>
            <div>
              <h1 className='font-bold text-3xl'>Hello, I'm Chris Wang</h1>
              <h2 className='font-bold text-2xl gradiant-text'>3rd Year Management Engineering student from the University of Waterloo</h2>
            </div>
            <div></div>
            <div>
              <img src={profile} width={220}/>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semiibold'>Projects</h2>
            <div className='flex flex-wrap gap-10 mt-11'>
              <div className='border rounded-md p-3'>
                <img src={project} width={220}/>
                <h3 className='text-lg font-semibold mt-6'>Project 1 balabala</h3>
                <p className='text-gray-400 text-sm mt-4'>Description</p>
                <div ckassName='flex justify-evenly mt-8'>
                   <Button variant="outlined">Live Preview</Button>
                   <Button variant="outlined">Github Link</Button>

                </div>
              </div>
              <div className='border rounded-md p-3'>
                <img src={project} width={220}/>
                <h3 className='text-lg font-semibold mt-6'>Project 2 balabala</h3>
                <p className='text-gray-400 text-sm mt-4'>Description</p>
                <div ckassName='flex justify-evenly mt-8'>
                   <Button variant="outlined">Live Preview</Button>
                   <Button variant="outlined">Github Link</Button>

                </div>
              </div>
              <div className='border rounded-md p-3'>
                <img src={project} width={220}/>
                <h3 className='text-lg font-semibold mt-6'>Project 2 balabala</h3>
                <p className='text-gray-400 text-sm mt-4'>Description</p>
                <div ckassName='flex justify-evenly mt-8'>
                   <Button variant="outlined">Live Preview</Button>
                   <Button variant="outlined">Github Link</Button>

                </div>
              </div>
              <div className='border rounded-md p-3'>
                <img src={project} width={220}/>
                <h3 className='text-lg font-semibold mt-6'>Project 2 balabala</h3>
                <p className='text-gray-400 text-sm mt-4'>Description</p>
                <div ckassName='flex justify-evenly mt-8'>
                   <Button variant="outlined">Live Preview</Button>
                   <Button variant="outlined">Github Link</Button>

                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default App
