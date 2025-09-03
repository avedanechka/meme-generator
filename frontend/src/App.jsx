import { useState } from 'react';
import styles from './App.module.css';
import MemeForm from './memeForm/MemeForm';
import ResultDisplay from './resultDisplay/ResultDisplay';

const MOCK_TEMPLATES = [
  { id: 'drake', src: 'https://i.imgflip.com/30b1gx.jpg' },
  { id: 'disaster-girl', src: 'https://i.imgflip.com/23ls.jpg' },
  { id: 'guy-looking', src: 'https://i.imgflip.com/1g8my4.jpg' },
  { id: 'bernie', src: 'https://i.imgflip.com/4u0h4h.jpg' },
  { id: 'galaxy-brain', src: 'https://i.imgflip.com/1ur9b0.jpg' },
  { id: 'success-kid', src: 'https://i.imgflip.com/1b42wl.jpg' },
  { id: 'mocking-spongebob', src: 'https://i.imgflip.com/1otk96.jpg' },
  { id: 'change-my-mind', src: 'https://i.imgflip.com/24y43o.jpg' },
];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!selectedTemplate || (!topText && !bottomText)) {
      alert('Пожалуйста, выберите шаблон и введите хотя бы один текст.');
      return;
    }
    
    setIsLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        imageUrl: 'https://i.imgflip.com/1bij.jpg',
        explanation: 'AI-объяснение: шутка в том, что...',
      });
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>ai rjakogenerator</div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>input</div>
          <div className={styles.memeForm}>
            <MemeForm
              templates={MOCK_TEMPLATES}
              selectedTemplate={selectedTemplate}
              onTemplateSelect={setSelectedTemplate}
              topText={topText}
              onTopTextChange={setTopText}
              bottomText={bottomText}
              onBottomTextChange={setBottomText}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.title}>output</div>
          <div className={styles.resultDisplay}>
            <ResultDisplay isLoading={isLoading} result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;