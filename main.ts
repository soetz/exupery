import 'reflect-metadata';
import { Container } from 'typedi';
import { Application } from './src/browser/application';

Container.get(Application);
