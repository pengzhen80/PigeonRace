# from msilib.schema import SelfReg
# import matplotlib
# matplotlib.use('Agg')
# import PIL._tkinter_finder
# import imp
import dbm
from hashlib import new
from operator import index
import os
from unicodedata import name
import PIL._tkinter_finder
import tkinter as tk
from tkinter import ttk
from tkinter import filedialog as fd
from tkinter.messagebox import showinfo
from turtle import width
# from tkinterhtml import HtmlFrame
import tkintermapview
import urllib.request
import codecs
import tkinter.font as tkFont
from gpxDataManagement import GpxdataManagement
from dbManagement import DBManagement
from tkinter import *
from tkinter import messagebox

LARGEFONT = ("Verdana", 35)


class UI_Management(tk.Tk):

    # __init__ function for class tkinterApp
    def __init__(self, *args, **kwargs):

        # __init__ function for class Tk
        tk.Tk.__init__(self, *args, **kwargs)

        width = self.winfo_screenwidth()

        height = self.winfo_screenheight()
        # root.geometry("widthxheight")
        # self.geometry('1200x1200')
        self.geometry(str(width)+'x'+str(height))
        self.eval('tk::PlaceWindow . center')

        # creating a container
        container = tk.Frame(self)
        container = tk.Frame(self)
        # container.pack(side = "top", fill = "both", expand = True)
        container.pack(side="top", fill="both", expand=True)

        container.grid_rowconfigure(0, weight=1)
        container.grid_columnconfigure(0, weight=1)

        # initializing frames to an empty array
        self.frames = {}

        # iterating through a tuple consisting
        # of the different page layouts
        for F in (StartPage_GpxDataManagePg, Page_DBManagePg):

            frame = F(container, self)

            # initializing frame of that object from
            # startpage, page1, page2 respectively with
            # for loop
            self.frames[F] = frame

            frame.grid(row=0, column=0, sticky="nsew")

        self.show_frame(StartPage_GpxDataManagePg)

    # to display the current frame passed as
    # parameter
    def show_frame(self, cont):
        frame = self.frames[cont]
        frame.tkraise()

# first window frame startpage


class StartPage_GpxDataManagePg(tk.Frame):
    def __init__(self, parent, controller):
        tk.Frame.__init__(self, parent)

        ####set page buttons####
        # label of frame Layout 2
        # label = ttk.Label(self, text ="導入數據", font = LARGEFONT)

        # putting the grid in its place by using
        # grid
        # label.grid(row = 4, column = 4, padx = 100, pady = 100)

        width_button = 7
        height_button = 1
        font_buttonText = tkFont.Font(size=22)

        button_pg_gpxDataManage = tk.Button(
            self, width=width_button, height=height_button, font=font_buttonText, text="導入數據", state="disabled")

        # putting the button in its place by
        # using grid
        button_pg_gpxDataManage.grid(row=1, column=1, padx=10, pady=10)

        # button to show frame 2 with text layout2
        button_pg_DBManage = tk.Button(self, width=width_button+1, height=height_button, font=font_buttonText,
                                       text="數據庫管理",         # specify text alignment
                                       command=lambda: controller.show_frame(Page_DBManagePg))

        # putting the button in its place by
        # using grid
        button_pg_DBManage.grid(row=1, column=2, padx=10, pady=10)

        ###set function buttons ###
        # button to set gpx data
        def select_file():
            filetypes = (("gpx文件", "*.gpx"), ("all files", "*.*"))
            filename = fd.askopenfilename(
                title='Open a file',
                initialdir='/',
                filetypes=filetypes)

            showinfo(
                title='Selected File',
                message=filename
            )
        # create map widget
        width_map = self.winfo_screenwidth()
        height_map = self.winfo_screenheight()
        # tp_mapWidget = Toplevel(self)
        # tp_mapWidget.geometry(str(width_map)+"x"+str(height_map))
        map_widget = tkintermapview.TkinterMapView(
            self, width=width_map, height=height_map, corner_radius=0)
        # map_widget = tkintermapview.TkinterMapView(
        #     self, width=width_map/3, height=height_map/3*2, corner_radius=0)

        # map_widget.set_overlay_tile_server(
        #     "http://a.tiles.openhighwaymap.org/standard/{z}/{x}/{y}.png")  # railway infrastructure

        map_widget.place(relx=0.6, rely=0.6, anchor='c')
        map_widget.set_tile_server(
            "https://tile.openstreetmap.org/{z}/{x}/{y}.png", max_zoom=22)

        # map_widget.set_tile_server(
        #     "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", max_zoom=22)

        map_widget.set_address("china")

        def drawPathBypoints(points):
            map_widget.set_path(points)

        # init list box
        listbox_gpxDatas = tk.Listbox(
            self, width=20, height=20, selectmode=tk.SINGLE)
        font_listbox_gpxDatas = tkFont.Font(size=12)
        listbox_gpxDatas.config(font=font_listbox_gpxDatas)
        listbox_gpxDatas.grid(row=3, column=1, padx=10, pady=10)
        # set select function

        # self.cur_path = None

        def items_selected(event):
            # todo : get selected gpx data
            filename = listbox_gpxDatas.get(listbox_gpxDatas.curselection())
            # # filter the name: remove the count head
            # print('filename:', filename)
            # index = listbox_gpxDatas.curselection()[0]
            # print('list index:', index)
            # index = str(index)
            # print('string index:', index)
            # filename = filename[len(index)+1:]
            # print('filename:', filename)
            # print(filename)
            filedata = gpxDataManager.getDataByName_toPath(filename)
            # allfiledata = gpxDataManager.getAllDataByName_toPath(filename)
            polyGonData = gpxDataManager.gpxPolygonByName(filename)
            # todo : draw path
            # map_widget.set_path([marker_2.position, marker_3.position,(52.57, 13.4), (52.55, 13.35)])
            # make new window
            tp_newmapWidget = Toplevel(self)
            tp_newmapWidget.geometry(str(width_map)+"x"+str(height_map))
            newmap_widget = tkintermapview.TkinterMapView(
                tp_newmapWidget, width=width_map, height=height_map, corner_radius=0)

            newmap_widget.place(relx=0.5, rely=0.5, anchor='c')
            newmap_widget.set_tile_server(
                "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", max_zoom=22)
            newmap_widget.set_address("china")
            filedata = filedata[:int(len(filedata)/2)]
            newmap_widget.set_path(filedata)
            tmp_polygon = newmap_widget.set_polygon(
                polyGonData, fill_color='red', outline_color='red')
        listbox_gpxDatas.bind('<<ListboxSelect>>', items_selected)

        # read all files and send to gpxDataManager
        # list files in the listbox
        def readAllFiles_in_folder(pathOfGpxFiles):
            # for root, dirs, files in os.walk(pathOfGpxFiles):
            #     for file in files:
            #         if file.endswith(".gpx"):
            #             print(file)
            #             listbox_gpxDatas.insert(tk.END, file)
            # todo:read all files and send to gpxDataManager
            gpxDataManager.decode_dir(pathOfGpxFiles)
            gpxDatas = gpxDataManager.get_datas()
            # count_listbox_gpxDatas = 1
            # for gpxData in gpxDatas:
            #     listbox_gpxDatas.insert(tk.END, str(
            #         count_listbox_gpxDatas)+' '+gpxData['name'])
                # count_listbox_gpxDatas = count_listbox_gpxDatas+1
            for gpxData in gpxDatas:
                listbox_gpxDatas.insert(tk.END, gpxData['name'])
                pathName = gpxData['name']
                polygon = gpxDataManager.gpxPolygonByName(pathName)
                map_widget.set_polygon(polygon, fill_color='red', outline_color='red')
            

        button_func_setGpxData = tk.Button(
            self, width=width_button+2, height=height_button, font=font_buttonText, text="導入GPX數據", command=lambda: readAllFiles_in_folder('./gpxfiles/OriginGPX/CN/NFZ/'))
        button_func_setGpxData.grid(row=2, column=1, padx=20, pady=30)

# second window frame page1


class Page_DBManagePg(tk.Frame):

    def __init__(self, parent, controller):

        tk.Frame.__init__(self, parent)
        # label = ttk.Label(self, text ="Page 1", font = LARGEFONT)
        # label.grid(row = 0, column = 4, padx = 10, pady = 10

        # button to show frame 2 with text
        # layout2

        width_button = 7
        height_button = 1
        font_buttonText = tkFont.Font(size=22)
        button_pg_gpxDataManage = tk.Button(self, text="導入數據", height=height_button, width=width_button, font=font_buttonText,
                                            command=lambda: controller.show_frame(StartPage_GpxDataManagePg))
        # putting the button in its place
        # by using grid
        button_pg_gpxDataManage.grid(row=1, column=1, padx=10, pady=10)
        # button_pg_gpxDataManage.config(width=20, height=20)

        # button to show frame 2 with text
        # layout2
        button_pg_DBManage = tk.Label(self, text="數據庫管理", height=height_button, width=width_button+1, font=font_buttonText,
                                      state="disabled")

        # putting the button in its place by
        # using grid
        button_pg_DBManage.grid(row=1, column=2, padx=10, pady=10)

        ###set db combo box and button###
        self.option_add("*TCombobox*Listbox*Font", tkFont.Font(size=22))

        dbcombobox = ttk.Combobox(self, height=60, width=width_button+1, font=font_buttonText, values=[
            '測試數據庫',
            '正式數據庫', ])
        dbcombobox.grid(row=2, column=1, padx=100, pady=100)
        dbcombobox.set('測試數據庫')

        # set new data list ui
        new_data_list = tk.Listbox(
            self, width=40, height=20, selectmode="multiple")
        new_data_list.grid(row=3, column=1, padx=10, pady=10)
        font_new_data_list = tkFont.Font(size=12)
        new_data_list.config(font=font_new_data_list)

        def updateSelectedItemText(tp, entry):
            if len(entry.get()) > 0:
                tmp_index = new_data_list.curselection()
                oldName = new_data_list.get(tmp_index)
                newName = entry.get()
                new_data_list.delete(tmp_index)
                new_data_list.insert(tmp_index, entry.get())
                ###update gpxDataManager###
                gpxDataManager.changePathName(oldName, newName)
            tp.destroy()

        def items_selected(event):
            # todo : get selected gpx data
            print(new_data_list.get(new_data_list.curselection()))
            tp = Toplevel(self)
            tp.geometry("500x200")

            entry1 = Entry(tp, width=20)
            entry1.insert(tk.END, new_data_list.get(
                new_data_list.curselection()))
            entry1.pack()
            button1 = Button(
                tp, text="ok", command=lambda: updateSelectedItemText(tp, entry1))
            button1.pack(pady=5, side=TOP)
        new_data_list.bind('<Double-1>', items_selected)

        def func_cb_button_multiRename_addPreOrEnd(tp, entry, preOrEnd='pre'):
            if len(entry.get()) > 0:
                tmp_index = new_data_list.curselection()
                listIndex = list(tmp_index)
                print('listIndex:', listIndex)
                for index in listIndex:
                    oldName = new_data_list.get(index)
                    print('oldName', oldName)
                    if preOrEnd == 'pre':
                        newName = entry.get()+oldName
                    else:
                        newName = oldName+entry.get()
                        print('newName', newName)
                    new_data_list.delete(index)
                    new_data_list.insert(index, newName)
                    ###update gpxDataManager###
                    gpxDataManager.changePathName(oldName, newName)
            tp.destroy()

        def func_cb_newDataList_multiRename(event):
            # todo : get selected gpx data
            # print(new_data_list.get(new_data_list.curselection()))
            tp = Toplevel(self)
            tp.geometry("500x200")

            entry1 = Entry(tp, width=20)
            entry1.pack()
            button1 = Button(
                tp, text="新增前綴", command=lambda: func_cb_button_multiRename_addPreOrEnd(tp, entry1, 'pre'))
            button1.pack(pady=5, side='left')

            button2 = Button(
                tp, text="新增後綴", command=lambda: func_cb_button_multiRename_addPreOrEnd(tp, entry1, 'end'))
            button2.pack(pady=5, side='right')
        new_data_list.bind('<Button-3>', func_cb_newDataList_multiRename)

        # set button to insert and update
        def func_cb_button_insert_new_list():
            # get points from gpxDataManager
            shedId = None
            shedId = house_combobox.get()
            if len(shedId) == 0:
                tk.messagebox.showinfo('警告', '請選擇房屋')
                return
            print('shedId', shedId)
            print('index:', new_data_list.curselection())
            pathName = new_data_list.get(new_data_list.curselection())
            print('pathName', pathName)
            gpxData = gpxDataManager.gpxPolygonByName(pathName)
            # print(gpxData)
            note = entry_Note.get()
            # print(note)
            # insert to db

            if dbManager.insertByShedAndPath(
                    shedid=shedId, path=pathName, points=gpxData, note=note):
                # update listbox
                old_data_list.insert(tk.END, new_data_list.get(
                    new_data_list.curselection()))
            else:
                showinfo("警告", "插入失敗")

            ###todo : send data to dbManager : update data###

        button_insert_new_list = tk.Button(
            self, text="插入", height=height_button, width=width_button, font=font_buttonText, command=func_cb_button_insert_new_list)
        # button_insert_new_list.grid(row=3, column=2, padx=10, pady=10)

        # set button to insert and update
        def func_cb_button_multiInsert_new_list():
            # get points from gpxDataManager
            shedId = house_combobox.get()
            if len(shedId) == 0:
                tk.messagebox.showinfo('警告', '請選擇房屋')
                return
            print('shedId', shedId)
            print('index:', new_data_list.curselection())
            listIndex = list(new_data_list.curselection())
            pathsName = []
            for index in listIndex:
                pathName = new_data_list.get(index)
                pathsName.append(pathName)
                print('pathName', pathName)
                gpxData = gpxDataManager.gpxPolygonByName(pathName)
                # print(gpxData)
                note = entry_Note.get()
                # print(note)
                # insert to db
                if dbManager.insertByShedAndPath(
                        shedid=shedId, path=pathName, points=gpxData, note=note):
                    old_data_list.insert(tk.END, new_data_list.get(
                        index))

                else:
                    showinfo("警告", "插入失敗")
            ###orgin names###
            new_data_list.delete(0, END)
            gpxDataManager.OriginPathName(pathsName)
            for pathName in gpxDataManager.get_pathNames():
                new_data_list.insert(END, pathName)

            ###todo : send data to dbManager : update data###

        button_multiInsert_new_list = tk.Button(
            self, text="插入", height=height_button, width=width_button, font=font_buttonText, command=func_cb_button_multiInsert_new_list)
        button_multiInsert_new_list.grid(row=3, column=2, padx=10, pady=10)

        # def func_cb_button_update_new_list():
        #     old_data_list.insert()(new_data_list.curselection())
        # 	###todo : send data to dbManager : update data###

        # button_update_new_list = tk.Button(
        #     self, text="更新", height=height_button, width=width_button, font=font_buttonText,command=func_cb_button_update_new_list)
        # button_update_new_list.grid(row=3, column=2, padx=10, pady=40)

        ###search paths' name auto from a str: name,name,name###
        entry_selectNewDataList_auto_text = tk.Entry(
            self, width=40, font=tkFont.Font(size=12))
        entry_selectNewDataList_auto_text.grid(row=4, column=1, padx=10, pady=10)

        entry_selectNewDataList_auto_filter = tk.Entry(
            self, width=10, font=tkFont.Font(size=12))
        entry_selectNewDataList_auto_filter.grid(row=5, column=1, padx=10, pady=10)

        def func_cb_button_selectNewDataList_auto():
            pathname_str = entry_selectNewDataList_auto_text.get()
            pattname_filter = entry_selectNewDataList_auto_filter.get()
            print(pathname_str)
            if(len(pathname_str) > 0):
                pathname_list = pathname_str.split(pattname_filter)
                index = 0
                while(new_data_list.get(index)):
                    path_name = new_data_list.get(index)
                    if(path_name in pathname_list):
                        new_data_list.select_set(index)
                    else:
                        for sub_path in pathname_list:
                            if(sub_path in path_name):
                                new_data_list.select_set(index)
                                break
                    index += 1
                
            return

        button_selectNewDataList_auto = tk.Button(
            self, text="搜索路徑", height=height_button, width=width_button, font=font_buttonText, command=func_cb_button_selectNewDataList_auto)
        button_selectNewDataList_auto.grid(row=4, column=2, padx=10, pady=10)

        # set house list ui
        house_combobox = ttk.Combobox(
            self, height=80, width=(width_button+1)*2, font=tkFont.Font(size=22))
        house_combobox.grid(row=2, column=3, padx=10, pady=10)

        # set input house name
        # update : create a remove house button
        def func_cb_button_remove_house():
            # todo : remove house
            if house_combobox.get() != "新增公棚":
                houseId = house_combobox.get()
                if dbManager.hasShed(houseId):
                    if dbManager.removeShed(houseId):
                        preValue = house_combobox['value']
                        listPreValue = list(preValue)
                        listPreValue.remove(houseId)
                        curValue = tuple(listPreValue)
                        house_combobox['value'] = curValue
                        showinfo("警告", "資料庫中刪除公棚成功")
                        # print(house_combobox['value'])
                    else:
                        showinfo("警告", "資料庫中刪除公棚失敗")
                else:
                    # print(type(house_combobox['value']),house_combobox['value'])
                    preValue = house_combobox['value']
                    listPreValue = list(preValue)
                    listPreValue.remove(houseId)
                    curValue = tuple(listPreValue)
                    house_combobox['value'] = curValue
                    showinfo("警告", "本地刪除公棚成功")
            else:
                showinfo("警告", "請選擇公棚")
        button_remove_house = tk.Button(
            self, text="刪除公棚", width=width_button, height=height_button, font=font_buttonText, command=func_cb_button_remove_house)
        button_remove_house.grid(row=2, column=4, padx=10, pady=10)

        # set old data list ui
        old_data_list = tk.Listbox(
            self, width=40, height=20, selectmode="multiple")

        old_data_list_scrollbarX = tk.Scrollbar(
            old_data_list, orient=HORIZONTAL)

        old_data_list.config(font=font_new_data_list,
                             xscrollcommand=old_data_list_scrollbarX.set)
        old_data_list_scrollbarX.config(command=old_data_list.xview, width=20)

        old_data_list.grid(row=3, column=3, padx=10,
                           pady=10, rowspan=60, sticky=N+E+S+W)
        old_data_list_scrollbarX.pack(side="top", anchor=NE)

        ###search paths' name auto from a str: name,name,name###
        entry_selectOldDataList_auto_text = tk.Entry(
            self, width=40, font=tkFont.Font(size=12))
        entry_selectOldDataList_auto_text.grid(row=4, column=4, padx=10, pady=10)

        entry_selectOldDataList_auto_filter = tk.Entry(
            self, width=10, font=tkFont.Font(size=12))
        entry_selectOldDataList_auto_filter.grid(row=5, column=4, padx=10, pady=10)

        def func_cb_button_selectOldDataList_auto():
            pathname_str = entry_selectOldDataList_auto_text.get()
            pattname_filter = entry_selectOldDataList_auto_filter.get()
            if len(pattname_filter) == 0 :
                pattname_filter = ","
            print(pathname_str)
            if(len(pathname_str) > 0):
                pathname_list = pathname_str.split(pattname_filter)
                index = 0
                while(old_data_list.get(index)):
                    path_name = old_data_list.get(index)
                    if(path_name in pathname_list):
                        old_data_list.select_set(index)
                    else:
                        for sub_path in pathname_list:
                            if(sub_path in path_name):
                                old_data_list.select_set(index)
                                break
                    index += 1
                
            return

        button_selectOldDataList_auto = tk.Button(
            self, text="搜索路徑", height=height_button, width=width_button, font=font_buttonText, command=func_cb_button_selectOldDataList_auto)
        button_selectOldDataList_auto.grid(row=6, column=4, padx=10, pady=10)


        # set button to remove old list
        def func_cb_button_remove_old_list():
            # todo :show warning message
            # showinfo("警告", "確定要刪除嗎？")
            MsgBox = messagebox.askyesno("確定要刪除嗎", "確定要刪除嗎?")
            print(MsgBox)
            if MsgBox:
                print('delete item')
                shedId = house_combobox.get()
                listIndex = list(old_data_list.curselection())
                for index in listIndex:
                    pathName = old_data_list.get(index)
                    print('delete', pathName)
                    if dbManager.deleteByShedAndPath(shedId, pathName):
                    #    old_data_list.delete(old_data_list.curselection())
                        pass
                    else:
                        showinfo("警告", "刪除失敗")
                old_data_list.delete(0, END)
                for pathName in dbManager.getPathsByShedId(shedId):
                    old_data_list.insert(END, pathName)
                # path = old_data_list.get(old_data_list.curselection())
                # if dbManager.deleteByShedAndPath(shedId, path):
                #     old_data_list.delete(old_data_list.curselection())
                # else:
                #     showinfo("警告", "刪除失敗")
            else:
                print('cancel')
            # remove the selected item from listbox and
            # todo :remove from db

        button_remove_old_list = tk.Button(
            self, text="刪除", height=height_button, width=width_button, font=font_buttonText, command=func_cb_button_remove_old_list)
        button_remove_old_list.grid(row=3, column=4, padx=10, pady=10)

        def func_linkDb():
            db = dbcombobox.get()
            message = ''
            if db == '測試數據庫':
                ###todo: link test db###
                ###search all data and show the house names in combobox:default is the first shed###
                ###show the path names under this house in the oldDataList###
                # showinfo(title='Information', message='link test db')
                message = '測試伺服器連接成功'
                dbManager.Set_Server('test')
                # for key in dict_shed_paths.keys():
                #     print(key)
                #     house_combobox.insert(tk.END, key)
            else:
                ###todo: link formal db###
                message = '正式伺服器連接成功'
                dbManager.Set_Server('real')
            dict_shed_paths = dbManager.getAllShedWithPaths()
            if(len(dict_shed_paths) > 0):
                showinfo(title='Information', message=message)
            else:
                showinfo(title='Information', message='伺服器連接失敗')
            print(dict_shed_paths.keys())
            house_content = list(dict_shed_paths.keys())
            house_content.insert(0, '新增公棚')
            house_combobox['value'] = house_content

            # todo : get gpxdatas from gpxDataManager and show in listbox
            # clear list box
            new_data_list.delete(0, tk.END)

            gpxDatas_names = gpxDataManager.get_pathNames()
            print(gpxDatas_names)
            for name in gpxDatas_names:
                new_data_list.insert(tk.END, name)
            # search db house list and old_gpxDatas
            # show house list and old_gpxDatas
            # print(house_combobox['value'])
            # house_combobox['value'] = ['house1', 'house2', 'house3']
            # old_data_list.insert(tk.END, 'test_gpxData1')

        button_dbLink = tk.Button(self, text="連接", height=height_button,
                                  width=int(width_button/2), font=font_buttonText, command=func_linkDb)
        button_dbLink.grid(row=2, column=2, padx=10, pady=10)

        def createHouse(tp, entry):
            if len(entry.get()) > 0:
                house_combobox['value'] += (entry.get(),)
                print(dbManager.shedsMapToPaths.keys())
            tp.destroy()

        def func_houseComboBox_showOldDatas(position):
            # update : create a house
            old_data_list.delete(0, 'end')
            houseId = house_combobox.get()
            print(houseId)
            if houseId == '新增公棚':
                # todo : create a house
                # showinfo(title='Information', message='create a house')
                tp = Toplevel(self)
                # x = self.winfo_x()
                # tp_x = str(x+200)
                # y = self.winfo_y()
                # tp_y = str(y+200)
                tp.geometry("500x200")
                tp.title('輸入公棚名字')

                entry1 = Entry(tp, width=20)
                entry1.pack()
                button1 = Button(
                    tp, text="ok", command=lambda: createHouse(tp, entry1))
                button1.pack(pady=5, side=TOP)

            # search olad datas in db by houseId
            # show old datas in listbox
            paths = dbManager.getPathsByShedId(houseId)
            for path in paths:
                old_data_list.insert(tk.END, path)

        house_combobox.bind('<<ComboboxSelected>>',
                            func_houseComboBox_showOldDatas)

        entry_Note = tk.Entry(self, width=10, font=font_buttonText)
        entry_Note.grid(row=1, column=4, padx=10, pady=10)
        entry_Note.insert(tk.END, "維護人員名字")


# Driver Code
if __name__ == '__main__':
    gpxDataManager = GpxdataManagement()
    dbManager = DBManagement()
    app = UI_Management()
    app.mainloop()
