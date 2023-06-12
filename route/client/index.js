import React from 'react';
import { render } from 'react-dom';
import Main from '@src/Index';

// 把根组件渲染到 DOM 树上
render(<Main />, window.document.getElementById('app'));
