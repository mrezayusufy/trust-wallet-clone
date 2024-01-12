import * as SQLite from "expo-sqlite";

function openDatabase() {
  const db = SQLite.openDatabase("test_db.db");
  return db;
}

const db = openDatabase();