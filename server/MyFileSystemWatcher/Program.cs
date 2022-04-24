using System;

namespace MyFileSystemWatcher
{
    class Program
    {
        static void Main(string[] args)
        {
            string path = "F:\\Temp";

            var watcher = new FileSystemWatcher(path);
            watcher.EnableRaisingEvents = true;
            watcher.Changed += (object source, FileSystemEventArgs e) =>
            {
                var obj = source;
            };

            watcher.Created += (object source, FileSystemEventArgs e) =>
            {
                var obj = source;
            };

            watcher.Deleted += (object source, FileSystemEventArgs e) =>
            {
                var obj = source;
            };
        }
    }
}
