import os 
# os.startfile('.\manage.exe runserver --noreload')
# os.startfile('.\manage.exe','runserver --noreload')
import subprocess
from time import sleep
subprocess.Popen([r'.\manage.exe','runserver','--noreload'])

import webbrowser
sleep(3)
webbrowser.open('http://127.0.0.1:8000/',new =2 )