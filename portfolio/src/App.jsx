import { useState } from 'react';
import './App.css';
import profile from './assets/pfp.jpg';
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
              <img src={profile} className="rounded-full" width={300}/>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className='container m-auto px-4 py-12'>
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

        {/* Tech */}
        <section className="py-10">
        <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semiibold'>Languages</h2>
            <div className="mt-4">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className='font-semibold'>Java</h2>
                  <p className="text-gray-500 text-righ">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className='mt-6'>
                <div className="flex justify-between items-center">
                  <h2 className='font-semibold'>Javascript</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className='mt-6'>
                <div className="flex justify-between items-center">
                  <h2 className='font-semibold'>Python</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className='mt-6'>
                <div className="flex justify-between items-center">
                  <h2 className='font-semibold'>C#</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
        
        
        </div>
        </section>

        {/* Additional Skills */}
        <section>
          <div className='container m-auto px-4 py-14'>
            <h2 className='text-2xl font-semiibold'>Technologies</h2>
            <div className='flex justify-between mt-6 w-[80%]'>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>
                  Git
                </p>              
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>
                  Git
                </p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>
                  Git
                </p>
              </div>
            </div>

            <div className='flex justify-between mt-6 w-[80%]'>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>
                  Git
                </p>              
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>
                  Git
                </p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>
                  Git
                </p>
              </div>
            </div>
          </div>


        </section>
          <div></div>
        <section>

        </section>
      </main>
    </>
  )
}

export default App
