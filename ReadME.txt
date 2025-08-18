de creat un sait in ReactJS, cu explicare pas cu pas ca pentru un incepator, explicit.
sa aiba 4 pagini, Home, About Contact, Galery
SA aiba acelasi Header(sa includa Logo, Meniu si iconite social) si Footer(sa includa Logo, Meniu si iconite social si in partea de jos, © 2025. All rights reserved)
Header la rularea in jos, sa ramana fixat in partea de sus, iar la footer sa fie sageata ca la apasarea ei sa revenim dinn partea de jos a saitului in header.
Sa avem un messenger in partea de jos.

La Galery, vreau ca sa apara pe pozele a cate 9, in partea de jos sa apara paginarea si la apasarea pe poza sa se deschida pe toata pagina
 si in parti sa aiba sageti pentru a le rula pe toate una cate una.

LA Contact vreau sa am coordinatele(instagram, nr. de telefon, email. Toate cu linkuri), iar mai jos forma de contact a clientului, care sa includa Nume,Prenume, email,
 telefon, textarea, atasarea fisierului png, jpg, un selector de data si ora pentru programare, sa fie chapta. VReau ca sa creeze automat un fisier ca baza de date pentru salvarea acestor programari. 
poate fi excel sau sql.
mai jos tot in Contacte sa fie harta .



mkdir react-website && cd react-website

Frontend:
npm create vite@latest client -- --template react
cd client
npm i
npm i react-router-dom
cd ..

Backend:
mkdir server && cd server
npm init -y
npm i express cors better-sqlite3 multer

Terminal A:
cd react-website/server
npm start

Terminal B:
cd react-website/client
npm i react-icons
npm i react-helmet-async
npm i i18next react-i18next i18next-browser-languagedetector
npm run dev