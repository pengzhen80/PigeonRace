# from msilib.schema import SelfReg
# import matplotlib
# matplotlib.use('Agg')
# import PIL._tkinter_finder
# import imp
import os
import tkinter as tk
from tkinter import ttk
from tkinter import filedialog as fd
from tkinter.messagebox import showinfo
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
        font_buttonText = tkFont.Font(size=30)

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
        map_widget = tkintermapview.TkinterMapView(
            self, width=width_map/3, height=height_map/3*2, corner_radius=0)

        # map_widget.set_overlay_tile_server(
        #     "http://a.tiles.openhighwaymap.org/standard/{z}/{x}/{y}.png")  # railway infrastructure

        map_widget.place(relx=0.6, rely=0.6, anchor='c')
        # points: example :[(52.57, 13.4), (52.55, 13.35)]
        # marker_2 = map_widget.set_marker(
        #     52.516268, 13.377695, text="Brandenburger Tor")
        # marker_3 = map_widget.set_marker(52.55, 13.4, text="52.55, 13.4")

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
        font_listbox_gpxDatas = tkFont.Font(size=20)
        listbox_gpxDatas.config(font=font_listbox_gpxDatas)
        listbox_gpxDatas.grid(row=3, column=1, padx=10, pady=10)
        # set select function

        self.cur_path = None

        def items_selected(event):
            # todo : get selected gpx data
            filename = listbox_gpxDatas.get(
                listbox_gpxDatas.curselection())
            print(filename)
            filedata = gpxDataManager.getDataByName_toPath(filename)
            # todo : draw path
            # map_widget.set_path([marker_2.position, marker_3.position,(52.57, 13.4), (52.55, 13.35)])
            tmp_path = map_widget.set_path(filedata)
            if self.cur_path:
                self.cur_path.delete()
                self.cur_path = tmp_path
            else:
                self.cur_path = tmp_path
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
            for gpxData in gpxDatas:
                listbox_gpxDatas.insert(tk.END, gpxData['name'])

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
        font_buttonText = tkFont.Font(size=30)
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
            self, width=20, height=20, selectmode=tk.SINGLE)
        new_data_list.grid(row=3, column=1, padx=10, pady=10)
        font_new_data_list = tkFont.Font(size=20)
        new_data_list.config(font=font_new_data_list)
        # # todo : get gpxdatas from gpxDataManager and show in listbox
        # gpxDatas_names = gpxDataManager.get_pathNames()
        # print(gpxDatas_names)
        # for name in gpxDatas_names:
        #     new_data_list.insert(tk.END, name)

        def updateSelectedItemText(tp, entry):
            if len(entry.get()) > 0:
                tmp_index = new_data_list.curselection()
                new_data_list.delete(tmp_index)
                new_data_list.insert(tmp_index, entry.get())
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

        # set button to insert and update
        def func_cb_button_insert_new_list():
            # get points from gpxDataManager
            shedId = None
            if label_house_name_input.get() != "輸入工棚":
                shedId = label_house_name_input.get()
            else:
                shedId = house_combobox.get()
            print('shedId', shedId)
            pathName = new_data_list.get(new_data_list.curselection())
            print('pathName', pathName)
            gpxData = gpxDataManager.getDataByName_toPath(pathName)
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
        button_insert_new_list.grid(row=3, column=2, padx=10, pady=10)

        # def func_cb_button_update_new_list():
        #     old_data_list.insert()(new_data_list.curselection())
        # 	###todo : send data to dbManager : update data###

        # button_update_new_list = tk.Button(
        #     self, text="更新", height=height_button, width=width_button, font=font_buttonText,command=func_cb_button_update_new_list)
        # button_update_new_list.grid(row=3, column=2, padx=10, pady=40)

        # set house list ui
        house_combobox = ttk.Combobox(
            self, height=80, width=(width_button+1)*2, font=tkFont.Font(size=22))
        house_combobox.grid(row=2, column=3, padx=10, pady=10)

        # set input house name
        label_house_name_input = tk.Entry(
            self, width=(width_button+1)*2, font=font_buttonText)
        label_house_name_input.grid(row=2, column=4, padx=10, pady=10)
        label_house_name_input.insert(tk.END, "輸入工棚")

        # set old data list ui
        old_data_list = tk.Listbox(
            self, width=40, height=20, selectmode=tk.SINGLE)
        old_data_list.config(font=font_new_data_list)
        old_data_list.grid(row=3, column=3, padx=10, pady=10)

        # set button to remove old list
        def func_cb_button_remove_old_list():
            # todo :show warning message
            # showinfo("警告", "確定要刪除嗎？")
            MsgBox = messagebox.askyesno("確定要刪除嗎", "確定要刪除嗎?")
            print(MsgBox)
            if MsgBox:
                print('delete item')
                shedId = house_combobox.get()
                path = old_data_list.get(old_data_list.curselection())
                if dbManager.deleteByShedAndPath(shedId, path):
                    old_data_list.delete(old_data_list.curselection())
                else:
                    showinfo("警告", "刪除失敗")
            else:
                print('cancel')
            # remove the selected item from listbox and
            # todo :remove from db

        button_remove_old_list = tk.Button(
            self, text="刪除", height=height_button, width=width_button, font=font_buttonText, command=func_cb_button_remove_old_list)
        button_remove_old_list.grid(row=3, column=4, padx=10, pady=10)

        def func_linkDb():
            db = dbcombobox.get()
            if db == '測試數據庫':
                ###todo: link test db###
                ###search all data and show the house names in combobox:default is the first shed###
                ###show the path names under this house in the oldDataList###
                # showinfo(title='Information', message='link test db')
                dict_shed_paths = dbManager.getAllShedWithPaths()
                print(dict_shed_paths.keys())
                house_combobox['value'] = list(dict_shed_paths.keys())
                # for key in dict_shed_paths.keys():
                #     print(key)
                #     house_combobox.insert(tk.END, key)
            else:
                ###todo: link formal db###
                showinfo(title='Information', message='link formal db')

            # todo : get gpxdatas from gpxDataManager and show in listbox
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

        def func_houseComboBox_showOldDatas(position):
            old_data_list.delete(0, 'end')
            houseId = house_combobox.get()
            print(houseId)
            # search olad datas in db by houseId
            # show old datas in listbox
            paths = dbManager.getPathsByShedId(houseId)
            for path in paths:
                old_data_list.insert(tk.END, path)

        house_combobox.bind('<<ComboboxSelected>>',
                            func_houseComboBox_showOldDatas)

        entry_Note = tk.Entry(self, width=40, font=font_buttonText)
        entry_Note.grid(row=1, column=4, padx=10, pady=10)
        entry_Note.insert(tk.END, "注釋")


# Driver Code
if __name__ == '__main__':
    gpxDataManager = GpxdataManagement()
    dbManager = DBManagement()
    app = UI_Management()
    app.mainloop()
