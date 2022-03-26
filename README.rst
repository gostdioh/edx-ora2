Open Response Assessment |build-status| |coverage-status|
=========================================================

This repository defines an Open Response Assessment (ORA) XBlock for use within edx-platform: https://github.com/edx/edx-platform

`User docs <http://edx.readthedocs.org/projects/edx-partner-course-staff/en/latest/exercises_tools/open_response_assessments/index.html>`_


Installation, Tests, and other Developer Tasks
==============================================

If you'll be modifying ORA code, the `Open edX Developer Stack`_ is a Docker-based development environment.

edX engineers follow the `guides on our wiki <https://openedx.atlassian.net/wiki/spaces/EDUCATOR/pages/9765004/ORA+Developer+Guide>`_.
Reading this page before contributing **is highly recommended**.

.. _Open edX Developer Stack: https://github.com/edx/devstack

License
=======

The code in this repository is licensed under version 3 of the AGPL unless
otherwise noted.

Please see ``LICENSE.txt`` for details.

How to Contribute
=================

Contributions are very welcome. The easiest way is to fork this repo, and then make a pull request from your fork. The first time you make a pull request, you may be asked to sign a Contributor Agreement.

Reporting Security Issues
=========================

Please do not report security issues in public. Please email security@edx.org

Mailing List and Slack
======================

You can get help with this code on our `mailing lists`_ or in real-time conversations on `Slack`_.

.. _mailing lists: https://open.edx.org/getting-help
.. _Slack: https://open.edx.org/getting-help

.. |build-status| image:: https://github.com/edx/edx-ora2/workflows/Python%20CI/badge.svg?branch=master
   :target: https://github.com/edx/edx-ora2/actions?query=workflow%3A%22Python+CI%22
   :alt: CI build status
.. |coverage-status| image:: https://coveralls.io/repos/edx/edx-ora2/badge.png?branch=master
   :target: https://coveralls.io/r/edx/edx-ora2?branch=master
   :alt: Coverage badge



開發過程只要

在devstack 中啟動 studio service:
  make dev.up.studio


改到 js 先
make static
make install-local-ora 即更新服務
不用重啟service, 重啟 service 是從 image 來，因此要update image ,但 update image 後，要重新準備 provision, 但這過程會安裝舊版的 ora


node 17
code: 'ERR_OSSL_EVP_UNSUPPORTED'
export NODE_OPTIONS=--openssl-legacy-provider


為了使用 modal 所以要引用 bootstrap 
bootstrap 如引用 cdn, 其也會引用 cdn 的jquery, 但在使用 ajax 時會導致 cors 問題
所以要引用 openedx 本身的 bootstrap, 但lms 與 studio 的  url 不同

如用 ${static_url()} 要使用 mako template 


fix eslint
./node_modules/.bin/fedx-scripts eslint --fix  --ext .jsx,.js openassessment/xblock/static/js/src/



寫分數的考慮
1. quick 快速設定 options 為 success, fail, bug 的 points  
2.  在 rubric_criteria_with_labels  中，檢查如有quick 即新增 options
3. 會準備 rubric_dict 在 create_assessment 時會將資料存入 database 並記錄 hash code (RubricIndex)
4.  在 options selected value 對應出其中的points