import { Button, ButtonHighlight } from '../button';
import { Hero, HeroSubtitle, HeroTitle } from '../hero';
import { HeroImage } from '../heroImage';
import { ChevronRight } from '../icons/chevronRight';

export const HomePageHero = () => {
  return (
    <Hero>
      <Button
        className='translate-y-[-1rem] animate-fade-in opacity-0'
        href='https://forms.gle/3LaUgASqx8S1dh62A'
        variant='secondary'
        size='small'
      >
        Contact us for a free 30 min consultation call
        <ButtonHighlight className='-mr-2 ml-2'>→</ButtonHighlight>
      </Button>
      <div className='px-6 md:px-8'>
        <HeroTitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
          Processtodata.ai is a smarter way <br className='hidden md:block' /> to power your
          operations
        </HeroTitle>
        <HeroSubtitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'>
        Experience the future of operations. Leverage Gen AI on your process data and make decisions fast, {' '}
          <br className='hidden md:block' />
          and automate tasks.
        </HeroSubtitle>
      </div>
      <Button
        href='https://datatoprocessinsights.streamlit.app/' 
        variant='primary'
        size='large'
        className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]'
      >
        Try our free AI tool to chat with your excel data <ChevronRight className='ml-2' />
      </Button>
      <HeroImage />
    </Hero>
  );
};
