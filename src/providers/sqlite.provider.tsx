// import React, { createContext, useContext, useState, useEffect, FC } from 'react';
// import * as SQLite from 'expo-sqlite';

// interface ISQLiteContext {
//   db: SQLite.Database | null;
//   executeSql: (sqlStatement: string, args?: any[]) => Promise<any>;
// }

// const SQLiteContext = createContext<ISQLiteContext | null>(null);

// export const useSQLiteContext = () => {
//   const context = useContext(SQLiteContext);
//   if (!context) {
//     throw new Error('useSQLiteContext must be used within a SQLiteProvider');
//   }
//   return context;
// };

// interface SQLiteProviderProps {
//   databaseName: string;
//   onInit?: (db: SQLite.Database) => void;
//   children: React.ReactNode
// }

// export const SQLiteProvider: FC<SQLiteProviderProps> = ({ databaseName, onInit, children }) => {
//   const [db, setDb] = useState<SQLite.Database | null>(null);

//   useEffect(() => {
//     const initDatabase = async () => {
//       const database = SQLite.openDatabase(databaseName);
//       setDb(database);
//       if (onInit) {
//         onInit(database);
//       }
//     };
//     initDatabase();
//   }, [databaseName, onInit]);

//   const executeSql = (sqlStatement: string, args: any[] = []) => {
//     return new Promise((resolve, reject) => {
//       if (!db) {
//         reject(new Error('Database not initialized'));
//       } else {
//         db.transaction(
//           (tx) => {
//             tx.executeSql(
//               sqlStatement,
//               args,
//               (tx, success) => {
//                 resolve(success);
//                 console.log('SUCCESS IN SETUP DB');
//               },
//               (err) => {
//                 console.log('ERROR IN SETUP DB', err);
//                 return false;
//               }
//             );
//           },
//           (error) => reject(error)
//         );
//       }
//     });
//   };

//   const value: ISQLiteContext = { db, executeSql };

//   return (
//     <SQLiteContext.Provider value={value}>
//       {children}
//     </SQLiteContext.Provider>
//   );
// };
