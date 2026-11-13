Scenariusze Testowe - ToDo App (QA)
Test 1: Pobieranie listy zadań (GET /api/tasks)
Typ: Integracyjny
Krok: Uruchomienie aplikacji w przeglądarce i odpytanie serwera.
Oczekiwany rezultat: Serwer zwraca status 200 OK oraz listę początkowych zadań w formacie JSON.
Status: PASS (Pozytywny)
Test 2: Dodawanie nowego zadania (POST /api/tasks)
Typ: Funkcjonalny
Krok: Wpisanie nazwy zadania w formularzu i kliknięcie przycisku "Dodaj".
Oczekiwany rezultat: Dynamiczne zaktualizowanie widoku bez przeładowania strony, zapisanie rekordu na serwerze (status 201 Created).
Status: PASS (Pozytywny)
Test 3: Usuwanie zadania (DELETE /api/tasks/:id)
Typ: Funkcjonalny
Krok: Kliknięcie przycisku "X" przy elemencie listy.
Oczekiwany rezultat: Usunięcie wybranego ID z pamięci serwera i zniknięcie rekordu z interfejsu UI.
Status: PASS (Pozytywny)
