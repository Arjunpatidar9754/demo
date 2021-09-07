import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { LeftSidebar } from './layout-blueprints';

// Example Pages





const Home = lazy(()=> import('./layout-components/Home'));
const HtmlIntro = lazy(() => import('./tutorials/html/Intro'));
const Html_overview = lazy(() => import('./tutorials/html/Html_overview'));
const Html_basicTags = lazy(() => import('./tutorials/html/Html_basicTags'));
const Html_elements = lazy(()=> import('./tutorials/html/Html_elements'));
const Html_attributes = lazy(()=> import('./tutorials/html/Html_attributes'));
const Html_formatting = lazy(()=> import('./tutorials/html/Html_formatting'));
const Html_phraseTags = lazy(()=> import('./tutorials/html/Html_phraseTags'));
const Html_metaTags = lazy(()=> import('./tutorials/html/Html_metaTags'));
const Html_comments = lazy(()=> import('./tutorials/html/Html_comments'));
const Html_images = lazy(()=> import('./tutorials/html/Html_images'));
const Html_tables = lazy(()=> import('./tutorials/html/Html_tables'));
const Html_lists = lazy(()=> import('./tutorials/html/Html_lists'));
const Html_textLinks = lazy(()=> import('./tutorials/html/Html_textLinks'));
const Html_imageLinks = lazy(()=> import('./tutorials/html/Html_imageLinks'));
const Html_emailLinks = lazy(()=> import('./tutorials/html/Html_emailLinks'));
const Html_frames = lazy(()=> import('./tutorials/html/Html_frames'));
const Html_iframes = lazy(()=> import('./tutorials/html/Html_iframes'));
const Html_blocks = lazy(()=> import('./tutorials/html/Html_blocks'));
const Html_backgrounds = lazy(()=> import('./tutorials/html/Html_backgrounds'));
const Html_colors = lazy(()=> import('./tutorials/html/Html_colors'));
const Html_fonts = lazy(()=> import('./tutorials/html/Html_fonts'));
const Html_forms = lazy(()=> import('./tutorials/html/Html_forms'));
const Html_embededMultimedia = lazy(()=> import('./tutorials/html/Html_embededMultimedia'));
const Html_marquees = lazy(()=> import('./tutorials/html/Html_marquees'));
const Html_header = lazy(()=> import('./tutorials/html/Html_header'));
const Html_styleSheet = lazy(()=> import('./tutorials/html/Html_styleSheet'));
const Html_javascript = lazy(()=> import('./tutorials/html/Html_javascript'));
const Html_layouts = lazy(()=> import('./tutorials/html/Html_layouts'));


const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Please wait while we load the live.
              </div>
            </div>
          }>
          <Switch>
            <Redirect exact from="/" to="/home" />

            <Route
              path={[
                '/home',
                '/html',
                '/Html_overview',
                '/Html_basicTags',
                '/Html_elements',
                '/Html_attributes',
                '/Html_formatting',
                '/Html_phraseTags',
                '/Html_metaTags',
                '/Html_comments',
                '/Html_images',
                '/Html_tables',
                '/Html_lists',
                '/Html_textLinks',
                '/Html_imageLinks',
                '/Html_emailLinks',
                '/Html_frames',
                '/Html_iframes',
                '/Html_blocks',
                '/Html_backgrounds',
                '/Html_colors',
                '/Html_fonts',
                '/Html_forms',
                '/Html_embededMultimedia',
                '/Html_marquees',
                '/Html_header',
                '/Html_styleSheet',
                '/Html_javascript',
                '/Html_layouts',
                '/Buttons',
                '/Dropdowns',
                '/NavigationMenus',
                '/ProgressBars',
                '/Pagination',
                '/Scrollable',
                '/Badges',
                '/Icons',
                '/UtilitiesHelpers',
                '/Cards3',
                '/Accordions',
                '/Modals',
                '/Notifications',
                '/Popovers',
                '/Tabs',
                '/RegularTables1',
                '/RegularTables4',
                '/FormsControls',
                '/ApexCharts',
                '/Maps',
                '/ListGroups'
              ]}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route
                      path="/home"
                      component={Home}
                    />
                    <Route path="/html" component={HtmlIntro} />
                    <Route path="/Html_overview" component={Html_overview} />
                    <Route path="/Html_basicTags" component={Html_basicTags} />
                    <Route path="/Html_elements" component={Html_elements} />
                    <Route path="/Html_attributes" component={Html_attributes} />
                    <Route path="/Html_formatting" component={Html_formatting} />
                    <Route path="/Html_phraseTags" component={Html_phraseTags} />
                    <Route path="/Html_metaTags" component={Html_metaTags} />
                    <Route path="/Html_comments" component={Html_comments} />
                    <Route path="/Html_images" component={Html_images} />
                    <Route path="/Html_tables" component={Html_tables} />
                    <Route path="/Html_lists" component={Html_lists} />
                    <Route path="/Html_textLinks" component={Html_textLinks} />
                    <Route path="/Html_imageLinks" component={Html_imageLinks} />
                    <Route path="/Html_emailLinks" component={Html_emailLinks} />
                    <Route path="/Html_frames" component={Html_frames} />
                    <Route path="/Html_iframes" component={Html_iframes} />
                    <Route path="/Html_blocks" component={Html_blocks} />
                    <Route path="/Html_backgrounds" component={Html_backgrounds} />
                    <Route path="/Html_colors" component={Html_colors} />
                    <Route path="/Html_fonts" component={Html_fonts} />
                    <Route path="/Html_forms" component={Html_forms} />
                    <Route path="/Html_embededMultimedia" component={Html_embededMultimedia} />
                    <Route path="/Html_marquees" component={Html_marquees} />
                    <Route path="/Html_header" component={Html_header} />
                    <Route path="/Html_styleSheet" component={Html_styleSheet} />
                    <Route path="/Html_javascript" component={Html_javascript} />
                    <Route path="/Html_layouts" component={Html_layouts} />
                    
                    
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
