---
layout: post
excerpt_separator: <!--more-->
title: Optymalizacja zdjęć
thumbnail: /assets/photos/posts-photos/optymalizacja-img.jpg
author: Piotr Niezgoda
categories: [frontend, optymalizacja]
readTime: 3min
permalink: /blog/optymalizacja-zdjec
metaDesc: Optymalizacja zdjęć na stronie internetowej pozwoli zmniejszyć ogólną wagę plików strony, oraz prędkość jej wczytywania. Opisuję metody, których używam podczas tego procesu
---
{: .post-text}
optymalizacja zdjęć na stronie może znacznie skrócić czas ładowania strony, oraz zmniejszy ogólną wagę plików strony na serwerze. W tym artykule opisuję wykorzystywane przeze mnie narzędzia i sposoby.
<!--more-->
Uważa się iż przeciętnie użytkownik komputera czeka około 3-4 sekund na załadowanie strony, a użytkownik mobilny około 5-6 sekund. Po tym czasie najczęściej następuje zamknięcie karty przeglądarki. Jak więc widzimy jest to w naszym jak najlepszym interesie, aby nasza strona i grafiki na niej wczytywały się możliwie najszybciej.
Co prawda technologia wciąż się rozwija i dostępne są coraz to szybsze łącza internetowe, lecz pamiętajmy że nie każdy dysponuje światłowodem, oraz pamiętajmy o osobach korzystających z internetu mobilnego - tam każdy kilobajt jest bardzo cenny!

{: .post-text}
kolejną ważną kwestią jest też faki, iż czas ładowania strony jest jednym z ważniejszych czynników algorytmu rankingowego Google. optymalizacja zdjęć i grafik na stronie jest więc jednym z niezbędnych kroków do stworzenia strony przyjaznej użytkownikowi, oraz SEO.

{: .post-header}
### No dobrze, ale jak to zrobić?

{: .post-text}
Podczas dostosowywania grafik na stronę internetową, pierwsze pytanie jakie sobię zadaję to - w jakim rozmiarze będą wyświetlane te zdjęcia?
Podam tu przykład tworzenia galerii na stronie.
Galeria - to najczęściej miniaturki, które po kliknięciu wyświetlają zdjęcie w większej rozdzielczości (i większej wadze). Miniaturki są to obrazki o niskiej wadze i małych rozmiarach. Nie ma sensu wkładać do miniaturki obrazka o rozmiarze 800x600, jeżeli miniaturka ma rozmiar 300x300. Sytuacja idealna to rozmiar obrazka taki sam, jak rozmiar kontenerta dla niego, lub przybliżony rozmiar (obrazek troszeczkę się przeskaluje w górę, lub w dół).

{: .post-text}
Mając miniaturki, zaczynam dostosowywanie dużych zdjęć - tych które otworzą się po kliknięciu w miniaturkę. Pada tutaj to samo pytanie - w jakim rozmiarze będą wyświetlane te zdjęcia? W obecnej dobie urządzeń elektronicznych dominują ekrany FullHD, oraz 4K. Dlatego najbardziej optymalne wydają się zdjęcia w rozmiarze FullHD, lub przybliżonym.

{: .post-text}
Rozmiary zdjęć dostosowuję używająć programu Photoshop, można także użyć programu Gimp, lub edytora online. Często przepuszczam także zdjęcia i miniaturki przez popularny serwis [TinyPNG](https://tinypng.com/), na który wysyłamy zdjęcia i otrzymujemy je skompresowane z niezauważalną rożnicą. Czasami wagę wszystkich zdjęć możemy zmniejszyć tym sposobem nawet o połowę! Niech nie zmyli nas nazwa, TinyPNG radzi sobie świetnie także z plikami .jpg
<figure class="post-figure">
    <img class="post-image" src="/assets/photos/posts-photos/tinypng.jpg"
         alt="Zdjęcie strony głównej TinyPNG">
    <figcaption class="post-figcaption">Tak obecnie wygląda strona główna TinyPNG</figcaption>
</figure>

{: .post-header}
### Formaty plików używanych na stronach

{: .post-text}
Obecnie używanymi formatami dla rastrowych plików graficznych są:

{: .post-list}
- JPG/JPEG
- PNG
- GIF

{: .post-text}
Formatem używanym dla plików wektorowych na stronach jest SVG.

{: .post-header}
### Jaki format wybrać?

{: .post-header__lv4}
#### JPG/JEPG

{: .post-text}
Najbardziej popularny format dla plików graficznych. Format ten cechuje się możliwością dużej kompresji, przez co jednak straci na swojej jakości. Pliki w tym formacie nie obsługuja również przezroczystośći. Pliki JPG należy używać głównie dla zdjęć, rozmiar będzie znacznie mniejszy niż w porównaniu do pliku PNG.

{: .post-header__lv4}
#### PNG

{: .post-text}
Format ten jest świetny dla:

{: .post-list}
- wykresów
- rysunków
- logo (jeżeli nie mamy go w formacie svg)
- zeskanowane dokumenty
- ilustracje
- diagramy
- pliki graficzne z małą ilością koloru
- ikonki
- Kiedy potrzebujemy przeźroczystości!

{: .post-header__lv4}
#### GIF

{: .post-text}
Format GIF służy do przedstawiania kilku obrazów w formie animacji, chociaż obecnieOdchodzi się od tego formatu na rzecz animacji SVG, lub animacji CSS.

{: .post-header__lv4}
### SVG

{: .post-text}
Format ten pozwala na wyświetlenie grafiki wektorowej na stronie internetowej. Ponadto możemy modyfikować ścieżki i tworzyć animacje. Grafika wektorowa pozostaje ostra, nawet po bardzo dużym powiększeniu.  Grafika taka jest idealna do zdjęć, które posiadają niewiele kolorów i przejść tonalnych, logo, schematy, krój pisma.

<figure class="post-figure">
    <img class="post-image" src="/assets/photos/posts-photos/svg_png.png"
         alt="porównanie powiększonego obrazka w formacie PNG i SVG. Format SVG pozostaje zawsze ostry, a w formacie PNG widzimy piksele">
    <figcaption class="post-figcaption">Porównanie logo w formacie PNG, oraz SVG po powiększeniu</figcaption>
</figure>