function debounce<T extends (...args: any[]) => Promise<any> | any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    let timeout: ReturnType<typeof setTimeout>;
    let pendingReject: ((reason?: any) => void) | null = null;
  
    return (...args: Parameters<T>): Promise<ReturnType<T>> => {
      if (timeout) {
        clearTimeout(timeout);
        if (pendingReject) {
          pendingReject(new Error("Debounced call canceled"));
        }
      }
  
      return new Promise<ReturnType<T>>((resolve, reject) => {
        pendingReject = reject;
        timeout = setTimeout(async () => {
          try {
            const result = await func(...args);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        }, delay);
      });
    };
  }

  
export default debounce;  