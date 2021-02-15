package Prima20210;

public class Prima20210 {
	
	public static void main(String[] args) {
		int n = 20210;
		
		int num = 1;
		int c = 0;
		int i;
		while(c < n) {
			num = num+1;
			for( i = 2; i <=num; i++) {
				if(num % i == 0) {
					break;
				}
			}
			if(i == num) {
				c = c+1;
			}
		}
		
		System.out.println("Angka prima ke 20210 adalah " + num);
		
	}
	
}
