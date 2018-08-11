using System;
using System.Collections.Generic;
using contacts_to.Models;

namespace contacts_to 
{
    public static class Storage 
    {
        private static Dictionary<string, string> cache;
        private static List<Contact> contacts;

        private static object cacheLock = new object ();
        private static object contactLock = new object ();
        public static Dictionary<string, string> AppCache {
            get 
            {
                lock (cacheLock) 
                {
                    if (cache == null) 
                    {
                        cache = new Dictionary<string, string> ();
                    }
                    return cache;
                }
            }
        }

        public static List<Contact> ContactsCache {
            get 
            {
                lock (contactLock) 
                {
                    if (contacts == null) 
                    {
                        contacts = new List<Contact> ();
                    }
                    return contacts;
                }
            }
        }
    }
}