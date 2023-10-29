import {HomeTabContent} from './HomeTabContent';
import {NotesTabContent} from './NotesTabContent';
import {Home, MusicNote, Settings, User} from '../../../assets';
import ProfileTabContent from './ProfileTabContent';
import {SettingsTabContent} from './SettingsTabContent';
export const tabs = [
  {
    id: 1,
    label: 'Home',
    icon: Home,
    content: HomeTabContent,
  },
  {
    id: 2,
    label: 'Notes',
    icon: MusicNote,
    content: NotesTabContent,
  },
  {
    id: 3,
    label: 'Profile',
    icon: User,
    content: ProfileTabContent,
  },
  {
    id: 4,
    label: 'Settings',
    icon: Settings,
    content: SettingsTabContent,
  },
];
