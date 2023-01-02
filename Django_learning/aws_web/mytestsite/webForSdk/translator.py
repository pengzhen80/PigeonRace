from googletrans import Translator
import googletrans


class TransByGoogle():
    def __init__(self):
        self.translator = Translator()
    
    def test(self):
        tr = self.translator.translate('bonjour je suis albert')
        print(tr.text)
        
    def  detect(self,text,type):
        return self.translator.translate(text,dest=type).text
        
if __name__ == '__main__':
    # test = TransByGoogle()
    # test.test()
    # translator = Translator()
    print(googletrans.LANGUAGES)
    text1 = '''
    A Római Birodalom (latinul Imperium Romanum) az ókori Róma által létrehozott 
    államalakulat volt a Földközi-tenger medencéjében
    '''

    text2 = '''
    Vysoké Tatry sú najvyššie pohorie na Slovensku a v Poľsku a sú zároveň jediným 
    horstvom v týchto štátoch s alpským charakterom. 
    '''

    translator = Translator()

    dt1 = translator.detect(text1)
    print(dt1)

    # dt2 = translator.detect(text2)
    # print(dt2)
    # tr = translator.translate('bonjour je suis albert')
    # print(tr)
    # print(tr.text)