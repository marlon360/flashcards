import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useTransition, animated } from 'react-spring'

import useRouter from './utils/useRouter';
import CoursePage from './pages/course.page';
import LessonPage from './pages/lesson.page';
import CardsPage from './pages/cards.page';
import NewCoursePage from './pages/new-course.page';
import NewLessonPage from './pages/new-lesson.page';
import EditCardPage from './pages/edit-card.page';
import CardListPage from './pages/card-list.page';
import newCardPage from './pages/new-card.page';
import { usePrevious } from './utils/usePrevios';

function App() {

  

  const { location } = useRouter();

  const previous = usePrevious(location);

  const getCurrentTransition = () => {
    console.log(previous);
    if (!previous) {
      return {}
    } else if (location.pathname.includes("/new") || location.pathname.includes("/cards")) {
      return {
        from: { opacity: 1, transform: 'translate3d(0,100%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,0,0)' },
      }
    } else if (previous.pathname.includes("/new") || previous.pathname.includes("/cards")) {
      return {
        from: { opacity: 0, transform: 'translate3d(0,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 1, transform: 'translate3d(0,100%,0)' },
      }
    } else if (location.pathname === '/courses' && previous.pathname.includes("/course/")) {
      return {
        from: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      }
    } else {
      return {
        from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
      }
    }
  }

  const transitions = useTransition(location, location => location.pathname, getCurrentTransition())

  return (
      transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" render={(props) => <CoursePage {...props} />} />
            <Route path="/courses" render={(props) => <CoursePage {...props} />} />
            <Route path="/new/course" render={(props) => <NewCoursePage {...props} />} />
            <Route path="/course/:id/new" render={(props) => <NewLessonPage {...props} />} />
            <Route exact path="/course/:id" render={(props) => <LessonPage {...props} />} />
            <Route exact path="/course/:courseid/:lessonid/cards" component={CardListPage} />
            <Route path="/course/:courseid/:lessonid/cards/new" component={newCardPage} />
            <Route path="/cards/:courseid/:lessonid/:cardid/edit" component={EditCardPage} />
            <Route exact path="/cards/:courseid/:lessonid" component={CardsPage} />
          </Switch>
        </animated.div>
      ))
  );
}

export default App;
