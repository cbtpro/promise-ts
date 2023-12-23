// Copyright 2021 cbtpro
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Mockjs from 'mock2js';
import { isDev } from '@/config';

export const initialMock = () => {
  return new Promise((resolve, reject) => {
    if (!isDev) {
      reject('未启用mock');
      return;
    }
    const mockPromises = [
      import('./api/index/authority'),
      import('./api/index/test')
    ];
    Promise.allSettled(mockPromises).then((results) => {
      console.log(results);

      Mockjs.setup({
        timeout: 800
      });
  
      console.log('mock initial complete!');
      resolve('success');
    });
  });
};

export default initialMock;
