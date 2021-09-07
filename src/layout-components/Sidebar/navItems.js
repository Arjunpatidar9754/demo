import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import GradeTwoTone from '@material-ui/icons/GradeTwoTone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

var iconsMap = {
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon
};

export default [
  {
    label: 'Navigation menu',
    content: JSON.parse(
      `[
        {
          "label": "Home",
          "to": "/home"
          
        },
        {
          "label": "HTML",
          "icon": "DashboardTwoToneIcon",
          "content": [
            {
              "label": "HTML Intro",
              "description": "This is a Html tutorial page.",
              "to": "/html"
            },
            {
              "label": "HTML Overview",
              "description": "This is a Html tutorial page.",
              "to": "/Html_overview"
            },
            {
              "label": "HTML Basic Tags",
              "description": "This is a Html tutorial page.",
              "to": "/Html_basicTags"
            },
            {
              "label": "HTML Elements",
              "description": "This is a Html tutorial page.",
              "to": "/Html_elements"
            },
            {
              "label": "HTML Attributes",
              "description": "This is a Html tutorial page.",
              "to": "/Html_attributes"
            },
            {
              "label": "HTML Formatting",
              "description": "This is a Html tutorial page.",
              "to": "/Html_formatting"
            },
            {
              "label": "HTML Phrase Tags",
              "description": "This is a Html tutorial page.",
              "to": "/Html_phraseTags"
            },
            {
              "label": "HTML Meta Tags",
              "description": "This is a Html tutorial page.",
              "to": "/Html_metaTags"
            },
            {
              "label": "HTML Comments",
              "description": "This is a Html tutorial page.",
              "to": "/Html_comments"
            },
            {
              "label": "HTML Images",
              "description": "This is a Html tutorial page.",
              "to": "/Html_images"
            },
            {
              "label": "HTML Tables",
              "description": "This is a Html tutorial page.",
              "to": "/Html_tables"
            },
            {
              "label": "HTML Lists",
              "description": "This is a Html tutorial page.",
              "to": "/Html_lists"
            },
            {
              "label": "HTML Text Links",
              "description": "This is a Html tutorial page.",
              "to": "/Html_textLinks"
            },
            {
              "label": "HTML Image Links",
              "description": "This is a Html tutorial page.",
              "to": "/Html_imageLinks"
            },
            {
              "label": "HTML Email Links",
              "description": "This is a Html tutorial page.",
              "to": "/Html_emailLinks"
            },
            {
              "label": "HTML Frames",
              "description": "This is a Html tutorial page.",
              "to": "/Html_frames"
            },
            {
              "label": "HTML I-Frames",
              "description": "This is a Html tutorial page.",
              "to": "/Html_iframes"
            },
            {
              "label": "HTML Blocks",
              "description": "This is a Html tutorial page.",
              "to": "/Html_blocks"
            },
            {
              "label": "HTML Backgrounds",
              "description": "This is a Html tutorial page.",
              "to": "/Html_backgrounds"
            },
            {
              "label": "HTML Colors",
              "description": "This is a Html tutorial page.",
              "to": "/Html_colors"
            },
            {
              "label": "HTML Fonts",
              "description": "This is a Html tutorial page.",
              "to": "/Html_fonts"
            },
            {
              "label": "HTML Forms",
              "description": "This is a Html tutorial page.",
              "to": "/Html_forms"
            },
            {
              "label": "HTML Embeded Multimedia",
              "description": "This is a Html tutorial page.",
              "to": "/Html_embededMultimedia"
            },
            {
              "label": "HTML Marquees",
              "description": "This is a Html tutorial page.",
              "to": "/Html_marquees"
            },
            {
              "label": "HTML Header",
              "description": "This is a Html tutorial page.",
              "to": "/Html_header"
            },
            {
              "label": "HTML Style Sheet",
              "description": "This is a Html tutorial page.",
              "to": "/Html_styleSheet"
            },
            {
              "label": "HTML Javascript",
              "description": "This is a Html tutorial page.",
              "to": "/Html_javascript"
            },
            {
              "label": "HTML Layouts",
              "description": "This is a Html tutorial page.",
              "to": "/Html_layouts"
            }
            
          ]
        },
        {
          "label": "CSS Tutorial",
          "content": [
            {
              "label": "Default",
              "description": "This is a dashboard page example built using this template.",
              "to": "/Css_intro"
            }
          ]
        },
        {
          "label": "Javascript Tutorial",
          "content": [
            {
              "label": "Default",
              "description": "This is a dashboard page example built using this template.",
              "to": "/Css_intro"
            }
          ]
        },
        {
          "label": "C# Tutorial",
          "content": [
            {
              "label": "Default",
              "description": "This is a dashboard page example built using this template.",
              "to": "/Css_intro"
            }
          ]
        },
        {
          "label": "C++ Tutorial",
          "content": [
            {
              "label": "Default",
              "description": "This is a dashboard page example built using this template.",
              "to": "/Css_intro"
            }
          ]
        },
        {
          "label": "About Us",
          "to": "/aboutUs"
        },
        {
          "label": "Dashboards",
          "to": "/DashboardDefault"
        }
      ]`,
      (key, value) => {
        if (key === 'icon') {
          return iconsMap[value];
        } else {
          return value;
        }
      }
    )
  }
];
