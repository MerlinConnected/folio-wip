import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { App } from './App';
import './styles.css';

ReactDOM.render(
  <>
    <Suspense fallback={null}>
      <App />
      <span id='pointer'>*</span>
      <main>
        <header>
          <h1>
            ©MER<em class='italic-header'>LIN</em>
          </h1>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M7 5.63399V0H8V5.63396L10.817 0.754797L11.683 1.2548L8.86601 6.13398L13.7451 3.31702L14.2451 4.18304L9.36603 7H15V8H9.36598L14.2451 10.817L13.7451 11.683L8.86604 8.86606L11.683 13.7452L10.817 14.2452L8 9.36604V15H7V9.36601L4.18301 14.2452L3.31699 13.7452L6.13396 8.86604L1.25476 11.683L0.754761 10.817L5.63398 8H0V7H5.63393L0.754761 4.18301L1.25476 3.31699L6.13399 6.13401L3.31699 1.25482L4.18301 0.754822L7 5.63399Z'
              fill='#DADADA'
            />
          </svg>
          <nav>
            <div class='menu-item'>
              <div class='menu-item-text-container'>
                <span class='menu-item-text'>WIP</span>
              </div>
            </div>
          </nav>
        </header>
        <div class='description-container'>
          <p>
            <span class='serif-text'>hello</span> i'm{' '}
            <span class='serif-text'>Gaëtan Jestin.</span> <em>Today</em>, I'm a
            3D
            <span class='serif-text'> Artist Based In</span> <em>Bordeaux.</em>
          </p>
          <p class='bottom-margin'>
            <em>Tomorrow</em> I'll be a{' '}
            <span class='serif-text'>creative developer. </span>I want to{' '}
            <span class='serif-text'>mix</span> both and create{' '}
            <em>awesome things.</em>
            <span class='serif-text'> Hopefully</span> working <em>w/ you</em>{' '}
            in a near future.
          </p>
        </div>
        <div class='footer'>
          <a
            href='https://www.linkedin.com/in/gaetan-jestin/'
            className='socials'
            target='_blank'
            rel='noopener noreferrer'
          >
            {'->'}Linked<em class='italic-footer'>In</em>
          </a>
        </div>
      </main>
    </Suspense>
  </>,
  document.getElementById('root')
);
