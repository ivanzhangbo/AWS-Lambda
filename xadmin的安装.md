#users的models创建完成后


## 1.安装依赖包
将xadmin和ueditor的文件拷贝到extra_apps下面

## 2.安装依赖包

pip install django-crispy-forms django-import-export django-reversion django-formtools future httplib2 six

## 3.安装依赖包
INSTALLED_APPS中添加如下

'''
    'django.contrib.admin',
    'DjangoUeditor',
    'xadmin',
    'crispy_forms',
'''

## 4.url配置如下
'''
from django.conf.urls import url, include
import xadmin

urlpatterns = [
    url('xadmin/', xadmin.site.urls),
]
'''

## 5.重载users模块
setting中追加如下
'''
AUTH_USER_MODEL = 'users.UserProfile'
'''

## 6.执行makemigrations
'''
makemigrations
'''



## 1.安装依赖包
'''

'''
