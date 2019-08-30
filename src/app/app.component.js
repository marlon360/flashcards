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

  const prevLocation = usePrevious(location);

  const getCurrentTransition = () => {
    console.log(location);
    if (location.state && location.state.transition) {
      return location.state.transition
    } else {
      return {
        from: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
        enter: { opacity: 1 },
        leave: { opacity: 1 },
      }
    }
  }

  const isModal = !!(
    location.state &&
    location.state.modal &&
    prevLocation !== location
  );

  const transitions = useTransition(isModal && prevLocation ? prevLocation : location, location => location.pathname, getCurrentTransition());
  const transitionsPrev = useTransition(isModal ? location : [], location => location.pathname, getCurrentTransition());

  return (
    <React.Fragment>
      {transitions.map(({ item, props, key }) => (
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
      ))}
      {transitionsPrev.map(({ item, props, key }) => (
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
      ))}
    </React.Fragment>
  );
}

export default App;
