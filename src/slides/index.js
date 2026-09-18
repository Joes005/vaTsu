import OriginLetter from './OriginLetter.jsx'
import Naam from './Naam.jsx'
import Cover from './Cover.jsx'
import FirstMeet from './FirstMeet.jsx'
import SchoolMemories from './SchoolMemories.jsx'
import ExamMemories from './ExamMemories.jsx'
import Prelude from './Prelude.jsx'
import DateQuiz from './DateQuiz.jsx'
import Question from './Question.jsx'
import Commit from './Commit.jsx'
import NamePicker from './NamePicker.jsx'
import CountdownSlide from './CountdownSlide.jsx'
import MoodPicker from './MoodPicker.jsx'
import Letter from './Letter.jsx'
import Sky from './Sky.jsx'
import Gallery from './Gallery.jsx'
import Closing from './Closing.jsx'
import FutureLetter from './FutureLetter.jsx'

export const SLIDES = [
  { id: 'originLetter', Component: OriginLetter, hideNav: true },
  { id: 'naam', Component: Naam },
  { id: 'examMemories', Component: ExamMemories },
  { id: 'cover', Component: Cover },
  { id: 'firstMeet', Component: FirstMeet },
  { id: 'schoolMemories', Component: SchoolMemories },
  { id: 'prelude', Component: Prelude },
  { id: 'dateQuiz', Component: DateQuiz, hideNav: true },
  { id: 'question', Component: Question },
  { id: 'commit', Component: Commit },
  { id: 'namePicker', Component: NamePicker, hideNav: true },
  { id: 'countdown', Component: CountdownSlide },
  { id: 'moodPicker', Component: MoodPicker, hideNav: true },
  { id: 'letter', Component: Letter },
  { id: 'sky', Component: Sky },
  { id: 'gallery', Component: Gallery },
  { id: 'closing', Component: Closing },
  { id: 'futureLetter', Component: FutureLetter },
]
